'use client'

import useDebounce from '@/hooks/useDebounce'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import qs from "query-string"
import Input from './Input'

const SearchInput = () => {
    const router = useRouter()
    const [value, setValue] = useState<string>("")
    const debounedValue = useDebounce<string>(value, 500)

    useEffect(() => {
        const query = {
            title: debounedValue
        }

        const url = qs.stringifyUrl({
            url: '/search',
            query: query
        })

        router.push(url)
    }, [debounedValue, router])

    return (
        <>
            <Input
                placeholder="What do you want to listen to?"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </>
    )
}

export default SearchInput