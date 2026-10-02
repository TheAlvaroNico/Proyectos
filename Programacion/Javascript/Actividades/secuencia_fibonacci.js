document.addEventListener("DOMContentLoaded",function(){
    function sucesionfibonacci(num_ele){
        let f0 =0; 
        let f1 =1;
        let lst_fib = [f0,f1];
        const n= lst_fib.length;

        for (let i = 0; i < num_ele - 2; i++){
            let fn= f0 + f1;
            lst_fib.push(fn);
            f0 = f1;
            f1 = fn;
        }
        return lst_fib;


    }

    const num_ele_usr = parseInt(prompt("introduce cuantos terminos de la sucesion de fibonacci quieres"))
    alert("los primeros " + num_ele_usr + "terminos de la sucesion de fibonacci son: " + sucesionfibonacci(num_ele_usr));


})