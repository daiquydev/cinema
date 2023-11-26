console.log("script is active")
function addFoodToBasket(did, dname, dprice, dimage) {
    cart = localStorage.getItem("cart");
    if (cart == null) {
        products = [];
        product = {
            id: did, 
            name: dname, 
            price: dprice, 
            image: dimage,
            quantity:1
        };
        products.push(product);
        localStorage.setItem("cart", JSON.stringify(products));
        swal.fire({
            toast: "true",
            background: "#A82c48",
            html: "<h6 class='text-light text-small px-1'>Món ăn đầu tiên được thêm vào giỏ hàng</h6>",
            position: "bottom",
            showConfirmButton: false,
            timer: "2000",
            timerProgressBar: true,
        })
    } else {
        pcart = JSON.parse(cart);
        oldcart = pcart.find((item) => item.id == did);
        if (oldcart) {

            pcart.map((item) => {

                if (item.id == oldcart.id) {
                    item.quantity++;
                }
            })

            localStorage.setItem("cart", JSON.stringify(pcart));

            swal.fire({
                toast: "true",
                background: "#A82c48",
                html: "<h6 class='text-light text-small px-1'>Thêm số lượng món ăn...</h6>",
                position: "bottom",
                showConfirmButton: false,
                timer: "2000",
                timerProgressBar: true,
            })

        } else {
            p = { 
                id: did, 
                name: dname, 
                price: dprice,
                image:dimage,
                quantity: 1 };
            pcart.push(p);
            localStorage.setItem("cart", JSON.stringify(pcart));

            swal.fire({
                toast: "true",
                background: "#A82c48",
                html: "<h6 class='text-light text-small px-1'>Món ăn mới được thêm vào giỏ hàng</h6>",
                position: "bottom",

                showConfirmButton: false,
                timer: "2000",
                timerProgressBar: true,
            })
        }
    }
    updateCart();
}

function updateCart() {

    cart = JSON.parse(localStorage.getItem("cart"));
    if (cart == null || cart.length == 0) {
        $(".cart-num").html("( 0 )");
        $(".cart-body").html("Chưa có món ăn nào trong giỏ hàng...");
        // $(".data").html("Select the Disire product for buy ....");
        $(".order-btn").addClass("disabled");
        // $(".check-btn2").addClass("d-none");
    } else {

        $(".cart-num").html(`(  ${cart.length}   )`);
        $(".order-btn").removeClass("disabled");
        // $(".check-btn2").removeClass("d-none");


        table = `
       
       <table class="table table-hover">
           <tr class="text-style">
                <th>Hình ảnh</th>
               <th>Tên</th>
               <th>Giá</th>
               <th>Số lượng</th>
               <th>Tổng</th>
               <th>Hành động</th>
              
           </tr>
       
       `;


        var totalPrice = 0;
        cart.map((item) => {



            table += `
               <tr>
                   <td> <img style='width:50px;height:50px;border-radius:50%' src='/static/dishimage/${item.image}'/> </td>
                   <td><small>${item.name}</small></td>
                   <td><small>${item.price}</small></td>
                   <td><small>${item.quantity}</small></td>
                   <td><small>${item.price * item.quantity}</small></td>
                  
                   <td>
                       <button class="btn btn-danger btn-sm" onclick=" removeBook('${item.id}')">Loại bỏ</button>
                   </td>
                  
                   
               </tr>
           
           `;
            totalPrice += item.price * item.quantity;

        })

        table = table + `  
              <tr>
              
                   <td colspan='3' class='my-2 '>Giá tiền tổng : ${totalPrice} </td>
               </tr>
               </table>
      
       
       `;
        $(".cart-body").html(table);

    }
}
function removeBook(did) {

    cart = JSON.parse(localStorage.getItem("cart"));
    updatecart = cart.filter((item) => item.id != did);
    n = `${updatecart.length}`;
    localStorage.setItem("cart", JSON.stringify(updatecart));
    if (n == 0) {
        localStorage.removeItem("cart");
    }
    updateCart();
    swal.fire({
        toast: "true",
        background: "#fecc0f",
        html: "<h6 class='text-dark text-small px-1'>Món ăn đã được bỏ khỏi giỏ hàng!! </h6>",
        position: "bottom",

        showConfirmButton: false,
        timer: "1000",
        timerProgressBar: true,
    })
}
document.re
$(document).ready(function () {
    updateCart();
})


