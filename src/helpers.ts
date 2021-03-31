const date = new Date()

const helpers = {
    defaultPageTitle: "Página de Teste",
    date: date.getFullYear(),
    menu: [{
        item: "Home",
        slug: '/'
    },{
        item: 'Contato',
        slug: '/contact'
    },{
        item: 'Sobre',
        slug: '/about'
    },{
        item: 'Login',
        slug: '/login'
    }]
}

export default { helpers }