const revalidate = 3000;

export default async function User() {
    const { name } = await (await fetch('http://localhost:3000/api/hello')).json();
    console.log(name);
    return (name);
}
