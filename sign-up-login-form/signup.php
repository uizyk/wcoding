
    <div class="container hide">
        <div class="signin">
            <h1>Welcome Back!</h1>
            <p>Already have an account? Sign in and start to chat with your friends</p>
            <button class="signup_submit1" id="signinButton"  onclick="showHide()">Sign in</button>
        </div>
        
        <div class="signup">
            <h1>Create Account</h1>
            <form action="postMsg.php" method="POST">
                <input name="login" type="text" placeholder="  Login" required>
                <br>
                <input name="email" type="text" placeholder="  Email" required>
                <br>
                <input name="password" type="password" placeholder="  Password" required>
                <br>
                <input name="password_confirm" type="password" placeholder="  Password confirm">
                <br>
                <input type="submit"  value="Submit" class="signup_submit2">

            </form>
        </div>
    </div>