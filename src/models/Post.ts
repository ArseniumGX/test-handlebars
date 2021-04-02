import 'typeorm'
import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn } from 'typeorm'

@Entity('blog.post')
class Post{

    @ObjectIdColumn()
    id: ObjectID
    
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

export default new Post