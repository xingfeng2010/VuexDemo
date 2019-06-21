<template>
    <div>
        <div class="yd-keyboard-head">
            <em>{{inputText}}</em>
        </div>
        <div class="yd-keyboard-error">{{error}}</div>
        <ul class="yd-keyboard-password">
            <li v-for="n, k in 6" :key="k"><i v-show="nums.length >= n"></i></li>
        </ul>
        <div class="yd-test">
            <div>
                <div class="yd-keyboard-left">{{title}}</div>
                <div class="yd-keyboard-right">{{speedEntrance}}</div>
            </div>
            <ul class="yd-keyboard-numbers">
                <li v-for="i, k in 4" :key="k">
                    <template v-if="triggerClose">
                        <a href="javascript:;" :id="FullScreen?'2.08rem':''" v-if="i == 4">{{cancelText}}</a>
                    </template>
                    <template v-else>
                        <a href="javascript:;"  v-if="i == 4"></a>
                    </template>
                    <template v-if="true">
                        <a href="javascript:;" :id="FullScreen&&(i==4&&k==0)?'2.08rem':''" v-for="n, k in numsArr.slice((i - 1) * 3, i * 3)" @touchstart.stop="numclick(n)" :key="k">{{n}}</a>
                    </template>
                    <template v-else>
                        <a href="javascript:;"   v-for="n, k in numsArr.slice((i - 1) * 3, i * 3)" @click.stop="numclick(n)" :key="k">{{n}}</a>
                    </template>

                    <a href="javascript:;" :id="FullScreen?'2.08rem':''" v-if="i == 4" @click.stop="backspace"></a>
                </li>
            </ul>
        </div>

        <progress-bar type="line" ref="line" :options="options"></progress-bar>
    </div>
</template>

<script>
    import Vue from 'vue'
    import VueProgress from 'vue-progress'
    Vue.use(VueProgress)
    export default {
        name: "keyboard",
        mounted () {
            //this.$refs.line.animate(0.5)
        },
        data () {
            return {
                nums: '',
                error: '',
                progress:0,
                numsArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
                maskzIndex: 1500,
                keyboardzIndex: 1502,
                keyboardTransform: "translate(0, 100%)",
                FullScreen: false,
                options: {
                    color: '#007AFF',
                    strokeWidth: 2,
                    text: {
                        // Initial value for text.
                        // Default: null
                        value: '删除消息中',
                        // Class name for text element.
                        // Default: 'progressbar-text'
                        className: 'progressbar__label',

                        style: {
                            // Text color.
                            // Default: same as stroke color (options.color)
                            color: '#f00',
                            position: 'absolute',
                            left: '50%',
                            top: '50%',
                            padding: 0,
                            margin: 0,
                            // You can specify styles which will be browser prefixed
                            transform: {
                                prefix: true,
                                value: 'translate(-50%, -50%)'
                            }
                        }
                    },
                    duration: 500,
                },
            }
        },
        props: {
            FindPin: {  //忘记控车码回调func
                type: Function
            },
            disorder: {  //乱序 默认乱序
                type: Boolean,
                default: true
            },
            title: {  //标题
                type: String,
                default: '忘记控车码?'
            },
            speedEntrance: {  //标题
                type: String,
                default: '请输入控车码'
            },
            cancelText: {
                type: String,
                default: '取消'
            },
            inputText: {
                type: String,
                default: '请输入6位控车码'
            },
            triggerClose: {
                type: Boolean,
                default: true
            }
        },
        created() {
            if(window.localStorage.getItem("deviceType")=="iOS") this.keyboardTransform="translate(0, 1000%)"
            const ua = window.navigator && window.navigator.userAgent || '';

            this.isMobile = !!ua.match(/AppleWebKit.*Mobile.*/) || 'ontouchstart' in document.documentElement;
            this.numsArr = this.upsetOrder(this.numsArr);
        },
        methods: {
            numclick(num) {
                this.error = '';
                if (this.nums.length >= 6)return;
                this.nums += num;
            },
            backspace() {
                const nums = this.nums;

                if (nums) {
                    this.nums = nums.substr(0, nums.length - 1);
                }

                this.$refs.line.animate(this.progress);
                this.progress += 0.1;
            },
            upsetOrder(arr) {
                const floor = Math.floor;
                const random = Math.random;
                const len = arr.length;

                let i, j, temp, n = floor(len / 2) + 1;

                while (n--) {
                    i = floor(random() * len);
                    j = floor(random() * len);
                    if (i !== j) {
                        temp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = temp;
                    }
                }
                return arr;
            }
        }
    }
</script>

<style lang="less">
    #FullScreenAuto{
        height: 3rem !important;
    }
    @import "./style/keyboard.less";
</style>