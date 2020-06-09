
// 请求style.css
getCSS.onclick = ()=>{
    const request = new XMLHttpRequest()
    // 请求方式,及内容
    request.open('GET', '/style.css')
    // 请求成功
    request.onload = ()=>{
        console.log('请求成功,内容是:')
        console.log(request.response)
        const style = document.createElement('style')
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

// 请求2.js
getJS.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js')
    request.onload = ()=>{
        console.log('请求成功')
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = ()=>{
        console.log('请求失败')
    }
    request.send()
}

// 请求3.html
