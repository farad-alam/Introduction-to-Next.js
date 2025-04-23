
export default async function getJoke() {
    const res = await fetch("https://api.chucknorris.io/jokes/random",{
        // cache:"no-store",
        next:{
            revalidate: 10
        }
    });
    if (!res.ok) {
        throw new Error("Something Error Occured When Fetching Joke")
    }

    return res.json()
}

