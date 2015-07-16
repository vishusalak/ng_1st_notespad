app.service('statusService',function(){

    this.getStatus =function(){
        return status;
    };

    this.getCards = function(){
        return cards;
    };

    this.addStatus = function(statusName){
        if(statusName) {
            var statusID = status.length + 1;
            status.push({
                id: statusID,
                statusName: statusName
            });
        }
    };

    this.deleteStatus = function(id){
        for (var i = status.length - 1; i >= 0; i--) {
            if (status[i].id === id) {
                status.splice(i, 1);
                break;
            }
        }
    };

    maxCardId = function(){
        var max = 0;
        for(var i = cards.length - 1; i >=0; i--){
             max = max>cards[i].id?max:cards[i].id;
        }
        return max;
    };

    this.addCard = function(id,content,card_id){
        if(card_id === undefined){
            var cardID = maxCardId() + 1;
            cards.push(
            {
                id : cardID,
                status_id : id,
                content : content
            }
        );
        }
        else{
            cards.push(
                {
                    id : card_id,
                    status_id : id,
                    content : content
                }
            );
        }
    };

    this.deleteCard = function(id){
        for (var i = cards.length - 1; i >= 0; i--) {
            if (cards[i].id === id) {
                cards.splice(i, 1);
                break;
            }
        }
    };

    this.deleteAllCards = function(id){
        if(id === undefined){
            for(var i = cards.length - 1;i >= 0; i--){
                cards.splice(i,1);
            }
        }
        else{
            for(var i = cards.length - 1;i >= 0; i--){
                if(cards[i].status_id === id){
                    cards.splice(i,1);
                }
            }
        }
    };

    this.deleteAllStatus =  function(){
        for(var i = status.length-1;i >=0; i--){
            status.splice(i,1);
        }
    };

    //this.randomColor = function(){
    //    var i = Math.floor(Math.random()*10);
    //    return colors[9] ;
    //    //return "red";
    //};


    var status = [

    ];

    var cards = [
        //{
        //    id: 1,
        //    status_id : 1,
        //    content : "dkjal"
        //}
    ];

    //var colors = ["#FFE4E1","#F5F5DC","#F5F5F5","#F0FFFF","#FFF8DC","#B0E0E6","#E0FFFF","#98FB98","#FFFACD","#C3F4BD"];
});
