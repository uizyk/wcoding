
    <div class="container2 show">
        
        <div class="signin2">
            <h1>Login</h1>
            <form action="login.php" method="POST">
                <input name="login" type="text" placeholder="  Login" required>
                <br>
                <input name="password" type="password" placeholder="  Password" required>
                <br>

                <input type="checkbox" class="checkbox" name="checkbox"/>
                <label for="checkbox">Remember me?</label><br>

                <h3>Forgot your password?</h3><br>

                <input type="submit"  value="SIGN IN" class="signup_submit2" id="signin">
                

            </form>
        </div>

        <div class="signup2">
            <h1>Hello!</h1>
            <p>Not a member of the fun yet? Sign up to chat with your friends</p>
            <button class="signup_submit1" id="signupButton"value="SIGN UP" onclick="showHide()">Sign up</button>
        </div>
    </div>