

let respuesta=await fetch("https://graph.facebook.com/v19.0/115059694851726/messages", 
    {
        method:"post",
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer EAA2U8xVsEz4BO0yJZBKcMPEx6lc2Q0wqKj7UjGCzZBIZB7wEEpaj5nqKZCnccMyZCzfla4ZCzktqJAhPIfxu0pZAyxdO6tswxRE9qZAhKrVvZCKBmliYZCdn9LeJajdKAz1at7xRwkstMHvTqqVcE56UiIGQm7B2hbXcYZASgC17EvA6vIpXyEEYqu92KBcWIxcuZABNeDAPSfXXihUBaMoZD"
        },
        body: JSON.stringify(
            {
                "messaging_product": "whatsapp",
                "to": "541154200776",
                "type": "template",
                "template": {
                    "name": "aviso_pedido",
                    "language": {
                        "code": "es_AR"
                    }
                }
            }
        )
    }
)

let data=await respuesta.json()
console.log(JSON.stringify(data))