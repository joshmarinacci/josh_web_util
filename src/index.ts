export function forceDownloadBlob(title: string, blob: Blob) {
    console.log("forcing download of", title)
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = title
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}


export function canvas_to_blob(canvas:HTMLCanvasElement):Promise<Blob> {
    return new Promise((res,rej)=>{
        canvas.toBlob(blob => {
            res(blob as Blob)
        })
    })
}
