<template>
    <div class="container-fluid">
        <div class="overlay"></div>
        <div class="login-form">
            <div class="account-img"><img src="../assets/avatar.jpg" alt="profile image"></div>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>

                <div class="radio">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="userrole" value="user">
                        <label class="form-check-label" for="flexRadioDefault1">
                            student
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="userrole" value="doctor">
                        <label class="form-check-label" for="flexRadioDefault2">
                            doctor
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="userrole" value="admin">
                        <label class="form-check-label" for="flexRadioDefault2">
                            system admin
                        </label>
                    </div>
                </div>
                

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .container-fluid{
        height: 100vh;
        width: 100%;
        display: grid;
        place-items: center;
        background-image: url("../assets/login-bg.jpg");
        background-size: cover;
        background-position: center;
        position: relative;
        .login-form{
            background-color: #fff;
            padding: 50px 30px 30px;
            color: #333;
            position: relative;
            z-index: 101;
            border-radius: 5px;
            width: 50%;
            @media (max-width:768px) {
                width: 99%;
                
            }
            .account-img{
                width: 100px;
                height: 100px;
                border-radius: 50%;
                position: absolute;
                top: -50px;
                left: 50%;
                transform: translateX(-50%);
                overflow: hidden;
                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
            }
            form{
                width: 100%;
                .radio{
                    display: flex;
                    justify-content: space-between;
                    padding: 10px 0;
                    flex-wrap: wrap;
                }
                input{
                    border: 1px solid #333;
                }
            } 
        }
    }




</style>