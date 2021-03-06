import {Pipe, PipeTransform} from '@angular/core';
import {IProduct} from './product';

@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
    transform(products: IProduct[], args: string): IProduct[] {
        let filter: string = args;
        if (filter) {
            return products.filter(
                (product: IProduct) =>
                    product.productName.toLocaleLowerCase().indexOf(filter) != -1
            );
        } else {
            return products;
        }
    }
}