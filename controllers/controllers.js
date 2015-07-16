app.controller('statusController',function($scope,$http,$modal,$log,statusService,$rootScope){
    init();

    function init() {
        $scope.status = statusService.getStatus();
        $scope.cards = statusService.getCards();
        $scope.mycolor = 'black';
    }

    $scope.draggedItem = function(){
        $rootScope.item = this.card;
    };

    $scope.droppedItem = function()
    {
        var card_id = $rootScope.item.id;
        var content = $rootScope.item.content;
        var status_id = this.ob;
        statusService.deleteCard($rootScope.item.id);
        statusService.addCard(status_id,content,card_id);
    };

    //$scope.randomColor = {
    //
    //    "background-color" : statusService.randomColor()
    //};

    $scope.deleteItem = function (){
        var card_id = $rootScope.item.id;
        statusService.deleteCard(card_id);
    };


    $scope.animationsEnabled = true;

    $scope.addModal = function (id) {
        if(id === undefined ) {
            $scope.modalInstance = $modal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'addStatus.html',
                controller: 'statusController',
                scope: $scope
            });
        }
        else {
            $scope.modalInstance = $modal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'addStatus.html',
                controller: 'statusController',
                scope: $scope ,
                resolve: {
                    id : function() {
                        return id;
                    }
                }
            });
        }
    };


    $scope.cancel = function () {
        $scope.modalInstance.dismiss('cancel');
    };

    //$scope.sortableOptions = {
    //    connectWith : '.panel .yoyo'
    //};

    $scope.addNewStatus = function(){
        var statusName = $scope.data.newStatusName;
        statusService.addStatus(statusName);
        $scope.data.newStatusName = '';
        $scope.modalInstance.close();
    };

    $scope.addStatus = function(){
        var statusName = $scope.data.newStatusName;
            statusService.addStatus(statusName);
            $scope.data.newStatusName = '';
    };

    $scope.deleteAllLists = function(){
        statusService.deleteAllCards();
        statusService.deleteAllStatus();
    };

    $scope.deleteStatus = function(id){
      statusService.deleteStatus(id);
    };

    $scope.addCard = function(id){
      var content = $scope.data.cardContent[id];
      if(content) {
          statusService.addCard(id,content);
          $scope.data.cardContent = '';
      }
    };

    $scope.deleteCard = function(id){
        statusService.deleteCard(id);
    };

    $scope.deleteAllCards = function(id) {
        statusService.deleteAllCards(id);
    };

});
