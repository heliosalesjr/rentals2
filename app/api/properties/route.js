import connectBD from "@/config/database";  

export const GET = async (request) => {
    try {
        await connectBD();
        return new Response(JSON.stringify({message: "are you boa?"}), {status: 200});
    } catch (error) {
        console.log(error);
        return new Response("Oh no!", {status: 500})
    }
}