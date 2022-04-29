export default interface Usuario {
    uid: string
    email: string
    nome: string
    token: string
    provedor: string  //Quem deu o acesso u/s ou google
    imagemUrl: string
}