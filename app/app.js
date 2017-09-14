var app = angular.module("stores", []);

app.controller("storesController", function ($scope) {


    $scope.storesList = stores;

    $scope.addItem = function (name, num, adress, worktime) {
        num = parseFloat(num); 
        if(name != "" && !isNaN(num)  && adress != "" && worktime !="")
        {
            $scope.storesList.items.push({ store: name, num: num, adress: adress, worktime:  worktime, products: []});
        }
    }

    $scope.updateItem = function ($index, name, num, adress, worktime, products) {
        if(name != "" && !isNaN(num)  && adress != "" && worktime !="")
        {
            $scope.storesList.items.splice($index, 1, { store: name, num: num, adress: adress, worktime:  worktime, products: products });
        }
    }

    $scope.deleteStore = function ($index) {
        if($index >= 1)
        {
            $scope.storesList.items.splice($index, 1);    
        }
        else if($index == 0){
                $scope.storesList.items.shift();
            }
    }

    $scope.addProduct = function ($index, nameProd, desc) {
        if(nameProd != "" &&  desc !="")
        {
            $scope.storesList.items[$index].products.push({name: nameProd, desc: desc});
        }
    }

    $scope.updateProduct = function (num, $index, name, desc) {
        if(name != "" &&  desc !="" && $index >= 1)
        {
            $scope.storesList.items[num].products.splice($index, 1, {name: name, desc: desc});
            
        }
        else if($index == 0){
                $scope.storesList.items[num].products.shift();
                $scope.storesList.items[$index].products.push({name: name, desc: desc});
            }
    }


    $scope.deleteProduct = function (num, $index) {
        
        if($index >= 1)
        {
            $scope.storesList.items[num].products.splice($index, 1);    
        }
        else if($index == 0){
                $scope.storesList.items[num].products.shift();
            }
    }



});