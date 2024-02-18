import { NextResponse } from "next/server";

export async function GET(request:any){
    const BASE_URL = "https://api.mapbox.com/search/searchbox/v1/suggest"
    const {searchParams} = new URL(request.url);
    const searchText=searchParams.get('q');

    const res = await fetch(BASE_URL+'?q='+searchText+'&country=MA&language=en&limit=6&session_token=[GENERATED-UUID]&proximity=-122.3995752,37.7881856&access_token='+process.env.MAPBOX_ACCESS_TOCKEN , 
    {
        headers: {
        "content-type": "application/json", 
    }})

    const searchResult = await res.json()

    return NextResponse.json({data:searchResult})
}