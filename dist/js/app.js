class Toast{
    constructor(title="", text="", options=null){
        this.options = {

        }
        this.id = this.generateID()
        this.title = title
        this.text = text
        this.initialize()
        this.setProgress()
    }

    generateID(){
        const id_length = 8
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        const characters_length = characters.length
        let result = ''

        let random_values = new Uint32Array(id_length)
        random_values = crypto.getRandomValues(random_values)
        random_values.forEach((value) => {
            result += characters[value % characters_length]
        })

        return result
    }

    initialize(){
        $(".toast").append(`
            <div class="toast-container toast-container-${this.id} success">
                <div class="toast-header">
                    <button>Close</button>
                </div>
                <div class="toast-title">
                    ${this.title}
                </div>    
                <div class="toast-message">
                    ${this.text}
                </div>    
            </div>
        `)

        $(".toast-container-" + this.id).on("transitionend", function(){
            $(this).remove()
        })
    }

    setProgress(){
        setTimeout(() => {
            $(".toast-container-" + this.id).addClass("remove")
        }, 2500)
    }
}

$("#on-btn-click").click(function(){
    new Toast("title", "text")
})