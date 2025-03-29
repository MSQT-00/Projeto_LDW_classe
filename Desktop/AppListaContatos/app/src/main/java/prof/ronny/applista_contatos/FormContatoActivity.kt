package prof.ronny.applista_contatos

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.Toast
import prof.ronny.applista_contatos.api.ClienteRetrofit
import prof.ronny.applista_contatos.models.Contato
import prof.ronny.applista_contatos.services.ServicoContatos
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class FormContatoActivity : AppCompatActivity() {
    lateinit var txtNomeContatoForm:EditText
    lateinit var txtEmailContatoForm:EditText
    lateinit var txtTelefoneContatoForm:EditText
    lateinit var txtEnderecoContatoForm:EditText
    lateinit var btnSalvarContato:Button
    var contato:Contato?=null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_form_contato)
        txtNomeContatoForm = findViewById(R.id.txtNomeContatoForm)
        txtEmailContatoForm = findViewById(R.id.txtEmailContatoForm)
        txtTelefoneContatoForm = findViewById(R.id.txtTelefoneContatoForm)
        txtEnderecoContatoForm = findViewById(R.id.txtEnderecoContatoForm)
        btnSalvarContato = findViewById(R.id.btnSalvarContato)
        btnSalvarContato.setOnClickListener { salvarContato()}


    }

    private fun salvarContato() {

        if(contato==null){
            cadastrarContato()

        }
        else{

        }

    }

    private fun cadastrarContato() {

        val novoContato:Contato=Contato(
            "",
        txtNomeContatoForm.text.toString(),
            txtEmailContatoForm.text.toString(),
            txtTelefoneContatoForm.text.toString(),
            txtEnderecoContatoForm.text.toString(),
            "#"

        )
        val cliente = ClienteRetrofit.client.create(ServicoContatos::class.java)
        cliente.insereContato(novoContato).enqueue(object :Callback<Contato>{
            override fun onResponse(call: Call<Contato>, response: Response<Contato>) {

                if(response.isSuccessful){
                    Toast.makeText(this@FormContatoActivity,"Contato cadastrado",Toast.LENGTH_LONG).show()
                    this@FormContatoActivity.finish()
                }
                else{
                    Toast.makeText(this@FormContatoActivity,"falhou meu parceiro", Toast.LENGTH_LONG).show()
                }
            }

            override fun onFailure(call: Call<Contato>, t: Throwable) {
                    Toast.makeText(this@FormContatoActivity,"Falha na requisição", Toast.LENGTH_LONG).show()
            }
        })

    }
}