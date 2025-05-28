package prof.ronny.applista_contatos.services
import prof.ronny.applista_contatos.models.Contato
import retrofit2.http.*
import retrofit2.Call

interface ServicoContatos {
    @GET("contatos")
    fun getContatos():Call<List<Contato>>
    @POST("contatos")
    fun insereContato(@Body contato: Contato): Call<Contato>

}