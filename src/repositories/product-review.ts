import { EntityRepository, Repository } from "typeorm"

import { ProductReview } from "../models/product-review"

@EntityRepository(ProductReview)
 export class ProductReviewRepository extends Repository<ProductReview> { }