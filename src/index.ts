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

export function file_to_json(file:File):Promise<any> {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader()
        // @ts-ignore
        fileReader.onload = event => resolve(JSON.parse(event.target.result))
        fileReader.onerror = error => reject(error)
        fileReader.readAsText(file)
    })
}

export function obj_to_blob(toJsonObj: any):Promise<Blob> {
    let str = JSON.stringify(toJsonObj, null, '   ');
    return Promise.resolve(new Blob([str]));
}
