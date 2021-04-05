import 'typeorm'
import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn } from 'typeorm'

@Entity('post')
class Post{

    @ObjectIdColumn()
    _id: ObjectID
    
    @Column()
    title: string

    @Column()
    body: string

    @Column()
    tags: string[]

    @Column()
    slug: string

    @CreateDateColumn()
    createdAt: Date

}

export { Post }