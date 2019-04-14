export const common = {
    methods : {
        getDateAndTime(date){
           
        },
        addComma(num){
            var regexp = /\B(?=(\d{3})+(?!\d))/g;
            return num.toString().replace(regexp, ',');
        }
    }
}