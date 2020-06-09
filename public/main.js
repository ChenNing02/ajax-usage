
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
getHTML.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET', '/3.html')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
                const div = document.createElement('div')
                div.innerHTML = request.response
                document.body.appendChild(div)
            }else {
                alert('加载div失败')
            }
        }
    }
    request.send()
}

// 请求XML
getXML.onclick = ()=>{
    let request = new XMLHttpRequest()
    request.open('GET', '/4.xml')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
                // 获取XML的内容
                const dom = request.responseXML
                const text = dom.getElementsByTagName('warning')[0].textContent
                // 将获取的文本两边的空格去掉并打出
                console.log(text.trim())
            }else {
                console.log('请求失败')
            }
        }
    }
    request.send()
}

// 请求JSON数据
getJSON.onclick = ()=>{
    let request = new XMLHttpRequest()
    request.open('GET', '/5.json')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
                console.log('请求成功,数据为')
                console.log(request.response)
                let object = JSON.parse(request.response)
                console.log(object)
                myName.textContent = object.name
            } else {
                console.log('请求失败')
            }
        }
    }
    request.send()
}