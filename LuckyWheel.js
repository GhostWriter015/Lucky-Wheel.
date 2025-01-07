function LuckyWheel(){
    let premi = ['pacco regalo','cappellino','sotto bicchiere','gira di nuovo',':('];
    let max = 1000;
    let randomN = Math.floor(Math.random() * max );
    if(randomN >= 0 && randomN <= 4){
        console.log('Hai vinto il primo premio della Ruota! è grandioso ovvero:',premi[0]);
    }else if(randomN >= 5 && randomN <= 20){
        console.log('Ottimo hai vinto il secondo premio della ruota! ovvero:', premi[1]);

    }else if(randomN >= 21 && randomN <= 100){
        console.log('FANTASTICO, hai vinto il terzo premio della ruota ovvero:',premi[2]);
    }else if(randomN >= 101 && randomN <= 300){
        console.log('Purtroppo non hai vinto nulla, ma puoi girare di nuovo la ruota!', premi[3]);
    }else if(randomN >= 301 && randomN <= 1000){
        console.log('hai perso, andrà meglio la prossima volta!');

    }
    return 'ruota della fortuna conclusa, grazie per aver partecipato! spero di rivederti presto :)';
}
console.log(LuckyWheel());
