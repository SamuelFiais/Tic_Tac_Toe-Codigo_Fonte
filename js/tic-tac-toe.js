const tic_tac_toe = {
    board: ['', '', '', '', '', '', '', '', '', ],
    simbols: {
        options: ['X', 'O'],
        turn_index: 0,
        change() {
            this.turn_index = (this.turn_index === 0 ? 1 : 0)
        }
    },
    container_elements: null,
    gameover: false,
    winning_sequences: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ],

    init(container) {
        this.container_elements = container
    },

    make_play(positiom) {
        if (this.gameover) return false;
        if (this.board[positiom] === '') {
            this.board[positiom] = this.simbols.options[this.simbols.turn_index]
            this.draw()
            let winning_sequences_index = this.check_winning_sequences(this.simbols.options[this.simbols.turn_index])

            if (winning_sequences_index >= 0) {
                this.game_is_over()
            } else {
                this.simbols.change()
            }
            return true
        } else{
            return false
        }
    },

    game_is_over() {
        this.gameover = true
        console.log("Game Over")
    },
    
    start() {
        this.board.fill('')
        this.draw()
        this.gameover = false
    },

    check_winning_sequences(simbol) {
        for (i in this.winning_sequences) {
            if (this.board[this.winning_sequences[i][0]] == simbol && this.board[this.winning_sequences[i][1]] == simbol && this.board[this.winning_sequences[i][2]] == simbol) {
                console.log(`Sequência Vencedora: ${this.winning_sequences[i]}`)
                return i
            }
        }

        return -1
    },

    draw() {
        let content = ''

        for (i in this.board) {
            content += '<div onclick="tic_tac_toe.make_play(' + i + ')">' + this.board[i] + '</div>'
        }

        this.container_elements.innerHTML = content
    },
}