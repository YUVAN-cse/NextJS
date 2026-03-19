export async function GET( request, {params}) {
    let {id} = await params;
    return NextResponse.json({id : id});
}

