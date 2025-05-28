package prof.ronny.applista_contatos.adapters

import android.view.*
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import prof.ronny.applista_contatos.R
import prof.ronny.applista_contatos.models.Contato

class ContatoAdapter(private val contatos:List<Contato>): RecyclerView.Adapter<ContatoAdapter.ContatoViewHolder>() {
    var posicaoClicada:Int = -1
    class ContatoViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView), View.OnCreateContextMenuListener {
        val nome:TextView = itemView.findViewById(R.id.txtNomedoContato)
        val telefone:TextView = itemView.findViewById(R.id.txtTelefoneContato)
        init {
            itemView.setOnCreateContextMenuListener(this)
        }

        override fun onCreateContextMenu(
            menu: ContextMenu?,
            v: View?,
            menuInfo: ContextMenu.ContextMenuInfo?
        ) {
            val menuInflater:MenuInflater = MenuInflater(v?.context)
            menuInflater.inflate(R.menu.menu_item_contato, menu)
        }

    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ContatoViewHolder {
        val layoutInflater: LayoutInflater = LayoutInflater.from(parent.context)
       val view = layoutInflater.inflate(R.layout.item_contato_layout,parent,false)
        return ContatoViewHolder(view)
    }


    override fun onBindViewHolder(holder: ContatoViewHolder, position: Int) {

       holder.nome.text = contatos[position].nome
        holder.telefone.text=contatos[position].telefone
        holder.itemView.setOnLongClickListener{
            posicaoClicada = holder.adapterPosition
            false
        }
    }

    override fun getItemCount(): Int {
       return contatos.count()
    }

}