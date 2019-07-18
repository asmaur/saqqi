<template>
    
    <div>
    
 <!--   <nav class="navbar navbar-expand-lg fixed-top" style="background-color: #000 !important; height: 1.5rem; text-transform: lowercase; color: #fff !important; font-size: .8rem;">

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">

                <li class="nav-item">
                    <a class="nav-link" href="shop.html" style="color: #fff !important;">login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="shop.html" style="color: #fff !important;">Registrar</a>
                </li>
            </ul>
        </div>

    </nav>
    -->
    
    <nav class="navbar navbar-expand-lg fixed-top"> <!--  style="margin-top: 1.5rem;"> -->
        <router-link class="navbar-brand" to="/">SAQQI</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">

                <li class="nav-item">
                    <router-link class="nav-link" to="shop">Shop</router-link>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Category
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Customized</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Cart [ 0 ]</a>
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        En
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">En</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Fr</a>
                    </div>
                </li>

            </ul>

        </div>
    </nav>
    
    
    </div>

</template>


<script>
    export default {
        name: "NavBar",
    }
</script>