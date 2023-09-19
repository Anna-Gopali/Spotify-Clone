import { Song } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getLikedSongs = async (): Promise<Song[]> => {
    const supabse = createServerComponentClient({
        cookies: cookies
    })

    const { data: { session } } = await supabse.auth.getSession()

    const { data, error } = await supabse
        .from('liked_songs')
        .select('*, songs(*)')
        .eq('user_id', session?.user?.id)
        .order('created_at', { ascending: false })

    if (error) {
        console.log("error", error);
        return [];
    }

    if (!data) {
        return []
    }

    return data.map((item) => ({
        ...item.songs
    }))
}

export default getLikedSongs;