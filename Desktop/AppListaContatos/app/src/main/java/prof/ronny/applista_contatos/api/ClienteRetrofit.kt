package prof.ronny.applista_contatos.api
import retrofit2.Call
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import retrofit2.http.*



object ClienteRetrofit {
    val BASE_URL = "https://api-mong-db-yp8x.onrender.com/"
    private var retrofit:Retrofit?= null

    val client:Retrofit
    get(){
        if (retrofit == null) {
            retrofit = Retrofit.Builder()
                .baseUrl(BASE_URL)
                .addConverterFactory(GsonConverterFactory.create())
                .build()
        }
        return  retrofit!!
    }
}