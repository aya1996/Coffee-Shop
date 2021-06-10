# Coffee Shop
I create a filter for product type and coffee flavor to make it easier in writing :<br />
   coffee machine   product_type <br />
  COFFEE_MACHINE_SMALL->small <br />
  COFFEE_MACHINE_LARGE->large <br />
  ESPRESSO_MACHINE->espresso <br />
  -------------------------------------------
   coffee pod   product_type <br />
  COFFEE_POD_SMALL->small <br />
  COFFEE_POD_LARGE->large <br />
  ESPRESSO_POD->espresso <br />
  --------------------------------------------
   coffee pod  coffee flavor <br />
     COFFEE_FLAVOR_VANILLA->vanilla <br />
     COFFEE_FLAVOR_CARAMEL->caramel <br />
     COFFEE_FLAVOR_PSL->psl <br />
     COFFEE_FLAVOR_MOCHA->mocha <br />
     COFFEE_FLAVOR_HAZELNUT->hazelnut <br />




1- All large machines https://coffee-shop-machine.herokuapp.com/api/coffee-machine?product_type=large
 
![screencapture-coffee-shop-machine-herokuapp-api-coffee-machine-2021-06-10-02_12_31](https://user-images.githubusercontent.com/20096361/121445346-8e504c00-c991-11eb-8880-d8b13f7151b0.png)
2-All large pods https://coffee-shop-machine.herokuapp.com/api/coffee-pod?product_type=large
![screencapture-coffee-shop-machine-herokuapp-api-coffee-pod-2021-06-10-02_15_07](https://user-images.githubusercontent.com/20096361/121445464-c9527f80-c991-11eb-9cdc-620934badefa.png)
3-All espresso vanilla pods
https://coffee-shop-machine.herokuapp.com/api/coffee-pod?product_type=espresso&coffee_flavor=vanilla
![screencapture-coffee-shop-machine-herokuapp-api-coffee-pod-2021-06-10-02_26_33](https://user-images.githubusercontent.com/20096361/121446256-64982480-c993-11eb-9056-9bd4c6dd2beb.png)
4-All espresso machines https://coffee-shop-machine.herokuapp.com/api/coffee-machine?product_type=espresso
![screencapture-coffee-shop-machine-herokuapp-api-coffee-machine-2021-06-10-02_29_37](https://user-images.githubusercontent.com/20096361/121446446-d3757d80-c993-11eb-8b1b-43626248f6e2.png)
5-All small pods
https://coffee-shop-machine.herokuapp.com/api/coffee-pod?product_type=small
![screencapture-coffee-shop-machine-herokuapp-api-coffee-pod-2021-06-10-02_31_13](https://user-images.githubusercontent.com/20096361/121446569-133c6500-c994-11eb-9671-50029ce9dfdd.png)

6-All pods sold in 7 dozen packs https://coffee-shop-machine.herokuapp.com/api/coffee-pod?pack_size=7
![screencapture-coffee-shop-machine-herokuapp-api-coffee-pod-2021-06-10-02_33_33](https://user-images.githubusercontent.com/20096361/121446682-5c8cb480-c994-11eb-8a3a-7abbc8e99c6f.png)

