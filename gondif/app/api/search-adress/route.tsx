import { NextResponse } from "next/server";

export async function GET(request:any){




    const BASE_URL = "https://api.mapbox.com/search/searchbox/v1/suggest"
    const {searchParams} = new URL(request.url);
    const searchText=searchParams.get('q');

    const res = await fetch(BASE_URL+'?q='+searchText+'&access_token=pk.eyJ1Ijoid2VibW9ycGhlcnMiLCJhIjoiY2xzdHBzZml5MTBmcTJsczBvbDV4cmFtbSJ9.Kvwu1Ii4MURfcYNhZL45Bg&session_token=[GENERATED-UUIDv4]&limit=3&language=en&types=country', 
    {
        headers: {
        "content-type": "application/json", 
    }})

    const searchResult = await res.json()

    return NextResponse.json({data:searchResult})
}