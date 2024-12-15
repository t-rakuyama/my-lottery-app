<template>
    <v-container>
        <h1>Register Numbers</h1>
        <v-text-field
            v-model="rangeInput"
            label="Enter range (e.g., 1-100)"
        ></v-text-field>
        <v-btn color="primary" @click="addRange">Add Range</v-btn>
        <v-btn color="red" @click="clearNumbers">Clear All</v-btn>
        <v-btn color="blue" @click="goToDraw">Go to Draw Page</v-btn>
        <v-list>
            <v-list-item v-for="(number, index) in numbers" :key="index">
                <span class="number-text">{{ number }}</span>
            </v-list-item>
        </v-list>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            rangeInput: '',
            numbers: []
        }
    },
    methods: {
        addRange() {
            const rangePattern = /^(\d+)-(\d+)$/;
            const match = this.rangeInput.match(rangePattern);
            if (match) {
                const start = parseInt(match[1], 10);
                const end = parseInt(match[2], 10);
                if (start <= end) {
                    const newNumbers = [];
                    for (let i = start; i <= end; i++) {
                        newNumbers.push(i);
                    }
                    this.numbers = this.numbers.concat(newNumbers);
                    localStorage.setItem('numbers', JSON.stringify(this.numbers));
                }
            }
            this.rangeInput = '';
        },
        clearNumbers() {
            this.numbers = [];
            localStorage.removeItem('numbers');
        },
        goToDraw() {
            this.$router.push('/draw');
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
.v-list-item {
    background-color: white; /* 背景色を白に設定 */
    border-bottom: 1px solid #ccc; /* 下線を追加 */
}

.number-text {
    color: black; /* 数値の文字色を黒に設定 */
}

.w-100 {
    width: 100%;
}
</style> 