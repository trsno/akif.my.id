const getTracks = async () => {
	try {
		return await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=wztd&api_key=${process.env.LAST_FM_API_KEY}&limit=5&format=json`, { next: { revalidate: 3600 } })
			.then((d) => d.json())
			.then((data) => {
				return data.recenttracks.track.map((songInfo: { image: { '#text': string }[]; url: string; date: { uts: number; '#text': string }; artist: { [x: string]: string }; name: string }) => {
					const artist = songInfo.artist['#text'];
					const title = songInfo.name;
					const cover = `https://audioapi.net/image/track/medium/image?title=${title}&artist=${artist}&placeholder=${songInfo.image[3]['#text']}`;
					const url = songInfo.url;
					const date = songInfo.date;
					const timeago = !date ? 0 : Math.floor(Date.now() / 1000 - date.uts);
					const nextDate =
						!date || date.uts === 0
							? 'Scrobbling now'
							: timeago < 60
							? `${timeago}s ago`
							: timeago < 3600
							? `${Math.floor(timeago / 60)}m ago`
							: timeago < 86400
							? `${Math.floor(timeago / 3600)}h ago`
							: date['#text'];
					return [artist, title, encodeURI(cover), nextDate, url];
				});
			});
	} catch (error) {
		return null;
	}
};

const getMovies = async () => {
	try {
		const imdb = await fetch('https://www.imdb.com/user/ur55012684/checkins?sort=list_order%2Cdesc&title_type=shorts&view=detail');
		const imdbObj = JSON.parse((await imdb.text()).split('IMDbReactInitialState.push(')[1].split(');')[0]);
		return imdbObj.list.items
			.map((list: { const: string; added: string }) => {
				const movie = imdbObj.titles[list.const];
				if (movie) return [list.added, { id: movie.id, poster: movie.poster?.url.split('._')[0] + '.jpg', title: movie.primary.title, year: movie.primary.year[0], type: movie.type }];
			})
			.filter((d: any) => d);
	} catch (error) {
		return null;
	}
};

export default async function now() {
	const tracks = await getTracks();
	const allMovies = await getMovies();
	const movies = allMovies.filter((m: { type: string }[]) => m[1].type === 'featureFilm').filter((_v: any, i: number) => i < 5);
	const series = allMovies.filter((m: { type: string }[]) => m[1].type !== 'featureFilm').filter((_v: any, i: number) => i < 5);
	return [tracks, movies, series, 'games', 'books'];
}
