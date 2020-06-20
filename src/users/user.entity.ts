import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

/*
 * User entity class.
 */
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ length: 64 })
  name: string

  @Column({ length: 128 })
  email: string

  @Column({ length: 128 })
  passwordHash: string

  @Column({ length: 64 })
  displayName: string

  @Column('text')
  bio: string
}
