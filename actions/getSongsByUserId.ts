import { Song } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getSongsByUserIds = async (): Promise<Song[]> => {
    const supabse = createServerComponentClient({
        cookies: cookies
    })

    const {
        data: sessionData,
        error: sessionError
    } = await supabse.auth.getSession()

    if (sessionError) {
        console.log("sessionError", sessionError.message);
        return []
    }

    const { data, error } = await supabse
        .from('songs')
        .select('*')
        .eq('user_id', sessionData.session?.user.id)
        .order('created_at', { ascending: false })

    if (error) {
        console.log(error.message);
    }

    return (data as any) || []
}

export default getSongsByUserIds;