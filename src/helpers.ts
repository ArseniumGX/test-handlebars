const date = new Date()

const helpers = {
    defaultPageTitle: "Página de Teste",
    date: date.getFullYear(),
    menu: [{
        name: "Home",
        slug: '/'
    },{
        name: "Add Post",
        slug: "/post/add"
    },{
        name: 'Login',
        slug: '/users/login'
    }]
}

export default { helpers }