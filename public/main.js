getCSS.onclick = ()=>{
    const request = new XMLHttpRequest()
    // 请求方式,及内容
    request.open('GET', '/style.css')
    // 请求成功
    request.onload = ()=>{
        console.log('请求成功,内容是:')
        console.log(request.response)
        let style = document.createElement('style')
        style.innerHTML = request.response
        document.head.appendChild(style)
    }
    // 请求失败
    request.onerror = ()=>{
        console.log('请求失败')
    }
    // 发送请求
    request.send()
}