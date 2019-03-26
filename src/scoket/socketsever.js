const WebSocket=require('ws');
const ws=new WebSocket.Server({port:8080},()=>{
    console.log('websocket 服务启动')
})
ws.on('connection',(client)=>{
    console.log('客户端连接')

    client.on('message',(msg)=>{
        console.log('客户端发送过来的消息',msg)
        client.send('我是服务器，我接收到了你的数据')
    })
    setTimeout(() => {
        client.send('欢迎客户端')
    }, 2000);
    client.on('close',()=>{
        console.log('与客户端断开连接')
    })
})