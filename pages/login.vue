<template>
    <section class="hero is-fullheight">
        <div class="hero-body">
            <div class="container">
            <div class="columns is-centered">
                <div class="column is-6-tablet is-6-desktop is-4-widescreen">
                    <form action="">
                        <div class="field">
                            <div class="control has-icons-left">
                                <input type="email" placeholder="Email" class="input is-medium" required>
                                <span class="icon is-left">
                                    <fa icon="envelope"/>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input type="password" placeholder="Password" class="input is-medium" required>
                                <span class="icon is-left">
                                    <fa icon="lock"/>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <button class="button is-success is-fullwidth is-medium">
                                <span class="icon"><fa icon="sign-in-alt"/></span>
                                <span>Login</span>
                            </button>
                        </div>
                    </form>
                    <hr>
                    <div class="columns">
                        <div class="column">
                            <button class="button is-primary is-fullwidth is-medium">
                                <span class="icon"><fa :icon="['fab', 'google']"/></span>
                                <span>Google</span>
                            </button>
                        </div>
                        <div class="column">
                            <button class="button is-primary is-fullwidth is-medium">
                                <span class="icon"><fa :icon="['fab', 'linkedin']"/></span>
                                <span>LinkedIn</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
//@import '~assets/scss/main.scss';

</style>