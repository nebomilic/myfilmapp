import {fetchFilms} from '../../service';
describe('++++ Test Services ++++',()=>{
    
    it('+++ Test fetchFilms service', (done) => {
            fetchFilms().then((response) => {
            // check if api return is fine
            //console.log('List em all:', response.results);
            expect(response.results).toBeDefined();           
            done();    
        });    
    });
});


