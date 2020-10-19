const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async (db) => {
    //inserir dados na tabela
    await saveOrphanage(db,{
        lat: "-16.7950276",
        lng: "-49.2874746",
        name: "Lar de amor",
        about: "Teste",
        whatsapp: '000000000',
        images: [
            "https://images.unsplash.com/photo-1600711724779-c039d7410ceb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1600711724779-c039d7410ceb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciencia para dar.",
        opening_hours: "Horário de visitas das 18h até 8h",
        open_on_weekends: "1"
    }
    )

    // consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar somente 1 orfanato, pelo ID
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    console.log(orphanage)

    //deletar dado da tabela
    // await db.run("DELETE FROM tabela WHERE id = '4'")

})