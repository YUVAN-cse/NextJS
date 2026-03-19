export async function GET( request, {params}) {
    let {id} = await params;
    return NextResponse.json({id : id});
}

export async function POST( request, {params}) {
    let {id} = await params;
    return NextResponse.json({id : id});
}