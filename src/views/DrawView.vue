<template>
    <v-container fill-height style="margin-top: 100px;">
        <v-row align="center" justify="center">
            <v-col cols="12" md="8" lg="6">
                <v-card class="pa-5">
                    <v-card-text>
                        <div class="display-1 text-center number-display">{{ displayNumber }}</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn :disabled="isButtonDisabled" color="secondary" @click="drawNumber" block>
                            Draw Number
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            numbers: [],
            drawnNumber: '',
            displayNumber: '',
            animationInterval: null,
            isButtonDisabled: false
        }
    },
    methods: {
        drawNumber() {
            if (this.numbers.length > 0) {
                this.isButtonDisabled = true; // ボタンを無効化
                this.startAnimation();
                setTimeout(() => {
                    clearInterval(this.animationInterval);
                    const randomIndex = Math.floor(Math.random() * this.numbers.length);
                    this.drawnNumber = this.numbers[randomIndex];
                    this.displayNumber = this.drawnNumber;
                    this.numbers.splice(randomIndex, 1);
                    localStorage.setItem('numbers', JSON.stringify(this.numbers));
                }, 1000); // 1秒後に実際の数値を表示

                 // 5秒後にボタンを再度有効化
                 setTimeout(() => {
                    this.isButtonDisabled = false;
                }, 5000);
            } else {
                this.displayNumber = 'No numbers left';
            }
        },
        startAnimation() {
            this.animationInterval = setInterval(() => {
                this.displayNumber = Math.floor(Math.random() * 100); // ランダムな数値を表示
            }, 1); // 0.001秒ごとにランダムな数値を表示
        }
    },
    created() {
        const storedNumbers = localStorage.getItem('numbers');
        if (storedNumbers) {
            this.numbers = JSON.parse(storedNumbers);
        }
    }
}
</script>

<style scoped>
.text-center {
    text-align: center;
}

.number-display {
    height: 400px;
    font-size: 200px;
}
</style>