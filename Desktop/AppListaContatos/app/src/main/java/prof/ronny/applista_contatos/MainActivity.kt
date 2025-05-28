package prof.ronny.applista_contatos

import android.content.Intent
import android.net.Uri
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.view.MenuItem
import android.widget.ImageButton
import androidx.activity.result.contract.ActivityResultContracts
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import prof.ronny.applista_contatos.adapters.ContatoAdapter
import prof.ronny.applista_contatos.api.ClienteRetrofit
import prof.ronny.applista_contatos.models.Contato
import prof.ronny.applista_contatos.services.ServicoContatos
import retrofit2.Call
import retrofit2.Response
import javax.security.auth.callback.Callback


class MainActivity : AppCompatActivity() {

    var listaContatos:ArrayList<Contato> = ArrayList() //alterei String para contato

    lateinit var listContatos:RecyclerView
    lateinit var btnNovoContato: ImageButton

    //criando lista de contatos: 14/09/2024

    fun carregarContato(){
        val client = ClienteRetrofit.client.create(ServicoContatos::class.java)
        client.getContatos().enqueue(object:retrofit2.Callback<List<Contato>>{
            override fun onResponse(call: Call<List<Contato>>, response: Response<List<Contato>>){
                if (response.isSuccessful){
                    listaContatos = response.body() as ArrayList<Contato>
                    val adapter = ContatoAdapter(listaContatos)
                    listContatos.adapter = adapter
                    listContatos.layoutManager = LinearLayoutManager(this@MainActivity)

                }
                else {
                    Log.e("Erro ao Carregar", response.message())
                }
            }

            override fun onFailure(call: Call<List<Contato>>, t: Throwable) {
                TODO("Not yet implemented")
            }
        })
    }
    //corrigi para minúsculo 14/09/2024
    //Fim

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        listContatos = findViewById(R.id.listContatos)
        btnNovoContato = findViewById(R.id.btnNovoContato)
        btnNovoContato.setOnClickListener{ novoContato()}

    }

    override fun onResume() {
        super.onResume()
        carregarContato()
    }

    private fun novoContato() {
        val intent = Intent(this,FormContatoActivity::class.java)
        startActivity(intent)
    }

    override fun onContextItemSelected(item: MenuItem): Boolean {
        val adapter:ContatoAdapter = listContatos.adapter as ContatoAdapter
        val contato = listaContatos.get(adapter.posicaoClicada)

        if(item.itemId == R.id.menu_mapa){
            val uri = Uri.parse("geo:0.0?q=" + contato.endereco + "&z=18")
            val intent = Intent(Intent.ACTION_VIEW,uri)
            startActivity(intent)
        }
        else if (item.itemId == R.id.menu_telefone){
            val uri = Uri.parse("tel:" + contato.telefone)
            val intent = Intent(Intent.ACTION_VIEW,uri)
            startActivity(intent)
        }

        return true
    }


    //criei 14/09/2024

}