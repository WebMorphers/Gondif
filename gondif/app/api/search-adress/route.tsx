import { NextResponse } from "next/server";

export async function GET(request:any){

    const BASE_URL = "https://api.mapbox.com/search/searchbox/v1/suggest"
    const {searchParams} = new URL(request.url);
    const searchText=searchParams.get('q');

    const res = await fetch(BASE_URL+'?q='+searchText+'&access_token=pk.eyJ1Ijoic2VhcmNoLW1hY2hpbmUtdXNlci0xIiwiYSI6ImNrNnJ6bDdzdzA5cnAza3F4aTVwcWxqdWEifQ.RFF7CVFKrUsZVrJsFzhRvQ&session_token=b6844ea0-751a-478e-ac07-b155204cb99e&language=en&types=country', 
    {
        headers: {
        "content-type": "application/json", 
    }})

    const searchResult = await res.json()

    return NextResponse.json({data:searchResult})
}